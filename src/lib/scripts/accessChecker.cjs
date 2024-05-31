import aChecker from 'accessibility-checker';

console.log(aChecker)

export default function getFailures(url) {
    return aChecker.getCompliance(url, "FDND").then((results) => {
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

// getFailures();




// import { aChecker } from 'accessibility-checker';

// export async function load({ fetch }) {
//   const results = await aChecker.getCompliance("https://programma.fdnd.nl", "FDND");
//   const failed = [...new Set(results.report.results.map((item) => {
//     if (item.level != 'pass') {
//       return item.ruleId
//     }
//   }))];

//   const report = results.report.results.map((item)=>{
//     const {ruleId, value, message, help} = item
//     return { ruleId, value, message, help }
//   });

//   const ruleset = await aChecker.getRuleset('WCAG_2_1');
//   for(let t = 0; t < ruleset.checkpoints.length; t++){
//     if(ruleset.checkpoints[t].rules.length > 0){
//       for(let i = 0; i < ruleset.checkpoints[t].rules.length; i++){
//         if (failed.includes(ruleset.checkpoints[t].rules[i].id)) {
//           const matchingItem = ruleset.checkpoints[t].rules[i].id + ruleset.checkpoints[t].num;
//           console.log(matchingItem)
//         }
//       }
//     }
//   }

//   return {
//     props: {
//       report: report,
//       failed: failed
//     }
//   };
// }

