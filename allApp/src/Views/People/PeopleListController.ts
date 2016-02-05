namespace JustinCredible.SampleApp.Controllers {

        export class PeopleListController extends BaseController<ViewModels.PeopleListViewModel> {

        //#region Injection

        public static ID = "PeopleListController";

        public static get $inject(): string[] {
            return [
                "$scope",
                Services.DataService.ID
            ];
        }

        constructor(
            $scope: ng.IScope,
            private DataService: Services.DataService
            ) {
            super($scope, ViewModels.PeopleListViewModel);
        }

        //#endregion

        //#region BaseController Overrides

        protected view_beforeEnter(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
            super.view_beforeEnter(event, eventArgs);

            this.populateViewModel();
        }

        //#endregion

        //#region Private Helper Methods

        private populateViewModel(): void {

            // this.viewModel.peoples = {};
            this.DataService.getPeople().then((data)=>{
                this.viewModel.peoples = data;
            });
            
            //TODO: get list from Firebase
        }

        //#endregion

        //#region Controller Methods



        //#endregion
    }
}
