// This is where my data from firebase is going to go
export class Information {

    // Information that will be stored on my app for users to see.
    public topic:string = "";
    public informationBody:string = "";

    constructor(topic:string, informationBody:string){

        this.topic = topic;
        this.informationBody = informationBody;
    }

}