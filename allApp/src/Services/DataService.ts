namespace JustinCredible.SampleApp.Services {

    /**
     * Provides a common set of helper/utility methods for logging errors.
     * TODO: need to add Firebase to project !!
     */
    export class DataService {

        //#region Injection

        public static ID = "DataService";

        public static get $inject(): string[] {
            return [
                '$http',
                '$q',
                '$firebaseArray'
            ];
        }

        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $firebaseArray: any) {

        }
        
        private _ref = new window['Firebase']("https://sweltering-fire-8071.firebaseio.com/");
        
        public getPeople(): ng.IPromise<{ 
            name: string,
            rate: number
         }[]> {
            var deferred = this.$q.defer();
            var $peoples = this.$firebaseArray(this._ref.child("people"));

            deferred.resolve($peoples);

            return deferred.promise;
        }
    }
}