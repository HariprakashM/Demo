class Uber{

    constructor(vehile_type,vehicle_name,pickup_point,destination_point,base_price,distanceinKM,timetakeninMIN)
    {
    this.vehile_type=vehile_type;
    this.vehicle_name=vehicle_name;
    this.pickup_point=pickup_point;
    this.destination_point=destination_point;
    this.base_price=base_price;
    this.distanceinKM=distanceinKM;
    this.timetakeninMIN=timetakeninMIN;
    }
    getprice()
    {
    //time takes for one min is one rupees
    //base price differs beased on vehile vehile type
    //price for one km is 17 rupees
    return `Total price = ${this.base_price+(this.distanceinKM*17)+this.timetakeninMIN}`;
    
    }
    }
    var a=new Uber("car","waganor","karaikudi","pudukkottai",200,40,45);
    var b=new Uber("auto","piagoo","trichy","pudukkottai",250,55,60);
    console.log(a);
    console.log(a.getprice());
    