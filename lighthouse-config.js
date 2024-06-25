export default {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['accessibility'],
    },
    output: 'json',
    categories: {
        'accessibility': {
          supportedModes: ['navigation', 'snapshot'],
          // Audit weights are meant to match the aXe scoring system of
          // minor, moderate, serious, and critical.
          // See the audits listed at dequeuniversity.com/rules/axe/4.7.
          // Click on an audit and check the right hand column to see its severity.
          auditRefs: [
            {id: 'accesskeys', weight: 7, group: 'a11y-navigation'},
            {id: 'aria-allowed-attr', weight: 10, group: 'a11y-aria'},
            {id: 'aria-allowed-role', weight: 1, group: 'a11y-aria'},
            {id: 'aria-command-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-conditional-attr', weight: 7, group: 'a11y-aria'},
            {id: 'aria-deprecated-role', weight: 1, group: 'a11y-aria'},
            {id: 'aria-dialog-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-hidden-body', weight: 10, group: 'a11y-aria'},
            {id: 'aria-hidden-focus', weight: 7, group: 'a11y-aria'},
            {id: 'aria-input-field-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-meter-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-progressbar-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-prohibited-attr', weight: 7, group: 'a11y-aria'},
            {id: 'aria-required-attr', weight: 10, group: 'a11y-aria'},
            {id: 'aria-required-children', weight: 10, group: 'a11y-aria'},
            {id: 'aria-required-parent', weight: 10, group: 'a11y-aria'},
            {id: 'aria-roles', weight: 7, group: 'a11y-aria'},
            {id: 'aria-text', weight: 7, group: 'a11y-aria'},
            {id: 'aria-toggle-field-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-tooltip-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-treeitem-name', weight: 7, group: 'a11y-aria'},
            {id: 'aria-valid-attr-value', weight: 10, group: 'a11y-aria'},
            {id: 'aria-valid-attr', weight: 10, group: 'a11y-aria'},
            {id: 'button-name', weight: 10, group: 'a11y-names-labels'},
            {id: 'bypass', weight: 7, group: 'a11y-navigation'},
            {id: 'color-contrast', weight: 7, group: 'a11y-color-contrast'},
            {id: 'definition-list', weight: 7, group: 'a11y-tables-lists'},
            {id: 'dlitem', weight: 7, group: 'a11y-tables-lists'},
            {id: 'document-title', weight: 7, group: 'a11y-names-labels'},
            {id: 'duplicate-id-aria', weight: 10, group: 'a11y-aria'},
            {id: 'form-field-multiple-labels', weight: 3, group: 'a11y-names-labels'},
            {id: 'frame-title', weight: 7, group: 'a11y-names-labels'},
            {id: 'heading-order', weight: 3, group: 'a11y-navigation'},
            {id: 'html-has-lang', weight: 7, group: 'a11y-language'},
            {id: 'html-lang-valid', weight: 7, group: 'a11y-language'},
            {id: 'html-xml-lang-mismatch', weight: 3, group: 'a11y-language'},
            {id: 'image-alt', weight: 10, group: 'a11y-names-labels'},
            {id: 'image-redundant-alt', weight: 1, group: 'a11y-names-labels'},
            {id: 'input-button-name', weight: 10, group: 'a11y-names-labels'},
            {id: 'input-image-alt', weight: 10, group: 'a11y-names-labels'},
            {id: 'label', weight: 7, group: 'a11y-names-labels'},
            {id: 'link-in-text-block', weight: 7, group: 'a11y-color-contrast'},
            {id: 'link-name', weight: 7, group: 'a11y-names-labels'},
            {id: 'list', weight: 7, group: 'a11y-tables-lists'},
            {id: 'listitem', weight: 7, group: 'a11y-tables-lists'},
            {id: 'meta-refresh', weight: 10, group: 'a11y-best-practices'},
            {id: 'meta-viewport', weight: 10, group: 'a11y-best-practices'},
            {id: 'object-alt', weight: 7, group: 'a11y-names-labels'},
            {id: 'select-name', weight: 7, group: 'a11y-names-labels'},
            {id: 'skip-link', weight: 3, group: 'a11y-names-labels'},
            {id: 'tabindex', weight: 7, group: 'a11y-navigation'},
            {id: 'table-duplicate-name', weight: 1, group: 'a11y-tables-lists'},
            {id: 'target-size', weight: 7, group: 'a11y-best-practices'},
            {id: 'td-headers-attr', weight: 7, group: 'a11y-tables-lists'},
            {id: 'th-has-data-cells', weight: 7, group: 'a11y-tables-lists'},
            {id: 'valid-lang', weight: 7, group: 'a11y-language'},
            {id: 'video-caption', weight: 10, group: 'a11y-audio-video'},
            // Manual audits
            {id: 'focusable-controls', weight: 0},
            {id: 'interactive-element-affordance', weight: 0},
            {id: 'logical-tab-order', weight: 0},
            {id: 'visual-order-follows-dom', weight: 0},
            {id: 'focus-traps', weight: 0},
            {id: 'managed-focus', weight: 0},
            {id: 'use-landmarks', weight: 0},
            {id: 'offscreen-content-hidden', weight: 0},
            {id: 'custom-controls-labels', weight: 0},
            {id: 'custom-controls-roles', weight: 0},
            // Hidden audits
            {id: 'empty-heading', weight: 0, group: 'hidden'},
            {id: 'identical-links-same-purpose', weight: 0, group: 'hidden'},
            {id: 'landmark-one-main', weight: 0, group: 'hidden'},
            {id: 'label-content-name-mismatch', weight: 0, group: 'hidden'},
            {id: 'table-fake-caption', weight: 0, group: 'hidden'},
            {id: 'td-has-header', weight: 0, group: 'hidden'},
          ],
        },
  },
}