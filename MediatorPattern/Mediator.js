'use strict'

class ConcessionStand{

    constructor(mediator, concessionName)
    {
        this._mediator = mediator;
        this._concessionName = concessionName;
    }

    Send(message){
        console.log(this._concessionName + ' sends message: ' + message);
        this._mediator.SendMessage(message, this);
    }

    Notify(message){
        console.log(this._concessionName + " gets message: " + message);
    }
}

class ConcessionMediator {
    SetNorthConcessionStand(concessionStand){
        this._northConcessionStand = concessionStand;
    }
    SetSouthConcessionStand(concessionStand){
        this._southConcessionStand = concessionStand;
    }

    SendMessage(message, colleague){
        if(colleague === this._northConcessionStand){
            this._southConcessionStand.Notify(message);
        }
        else if(colleague === this._sorthConcessionStand){
            this._northConcessionStand.Notify(message);
        }
    }
}

var mediator = new ConcessionMediator();

var northStand = new ConcessionStand(mediator, "North Concession Stand");
var southStand = new ConcessionStand(mediator, "South Concession Stand");
mediator.SetNorthConcessionStand(northStand);
mediator.SetSouthConcessionStand(southStand);

northStand.Send("Can you send some popcorn?");
southStand.Send("Sure thing, Kenny's on his way.");

southStand.Send("Do you have any extra hot dogs ? We've had a rush on them over here.");
northStand.Send("Just a couple, we\'ll send Kenny back with them.");