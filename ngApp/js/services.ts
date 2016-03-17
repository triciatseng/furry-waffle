namespace app.Services{
  export class ThoughtService{
    private ThoughtResource;

    public getAnswer(){
      return this.ThoughtResource.get({path:'getAnswer'}).$promise;
    }

    public getFortune(){
      return this.ThoughtResource.get({path:'fortune'}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.ThoughtResource = $resource('/api/deepThought/:path');
    }
  }

  angular.module('app').service('ThoughtService',ThoughtService);
}
