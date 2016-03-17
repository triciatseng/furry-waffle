namespace app.Controllers{
  export class HomeController{
    public isLoading = false;
    public output;

    public getAnswer(){
      this.isLoading = true;
      this.ThoughtService.getAnswer().then((res) => {
        this.output = res.text;
        this.isLoading = false;
      })
    }

    public getFortune(){
      this.isLoading = true;
      this.ThoughtService.getFortune().then((res) =>{
        this.output = res.text;
        this.isLoading = false;
      })
    }

    constructor (private ThoughtService:app.Services.ThoughtService){

    }
  }
  angular.module('app').controller('HomeController',HomeController);
}
