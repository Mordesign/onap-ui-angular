export const template = `
<div class="sdc-autocomplete-container" [ngClass]="{'results-shown': autoCompleteResults.length}" [attr.data-tests-id]="testId">
    <sdc-filter-bar
        [placeholder]="placeholder"
        [label]="label"
        [searchQuery]="searchQuery"
        [testId]="testId + '-filter-bar'"
        (searchQueryEvent)="onSearchQueryChanged($event)">
    </sdc-filter-bar>
    <ul class="autocomplete-results" [@displayResultsAnimation]="autoCompleteResults.length ?'true':'false'">
        <li *ngFor="let item of autoCompleteResults"
        (click)="onItemSelected(item)">{{item.value}}</li>
    </ul>
</div>
`;
