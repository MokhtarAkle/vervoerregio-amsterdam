const aChecker = require("accessibility-checker")

console.log(aChecker)
function getFailures() {
    aChecker.getCompliance("https://programma.fdnd.nl", "FDND").then((results) => {
        const failed = [...new Set(results.report.results.map((item) => {
            if (item.level != 'pass') {
                return item.ruleId
            }
        }))];

        console.log(failed)

        const report = results.report.results.map((item) => {
            const { ruleId, value, message, help } = item
            return { ruleId, value, message, help }
        });

        console.log('REPORT', results.report)

        aChecker.getRuleset('WCAG_2_1').then(data => {
            for (let t = 0; t < data.checkpoints.length; t++) {

                if (data.checkpoints[t].rules.length > 0) {

                    for (let i = 0; i < data.checkpoints[t].rules.length; i++) {
                        if (failed.includes(data.checkpoints[t].rules[i].id)) {

                            const matchingItem = data.checkpoints[t].rules[i].id + data.checkpoints[t].num;
                            console.log(matchingItem)
                            return matchingItem
                        }
                    }
                }
            }
        });
    });
}

getFailures();
