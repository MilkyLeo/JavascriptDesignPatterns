'use strict'

class MenuItem {
    constructor(name, amount, price){
        this.name = name;
        this.amount = amount;
        this.price = price;
    }

    Display(){
        console.log("\nName: " + this.name);
        console.log("Amount: " + this.amount);
        console.log("Price: $" + this.price);
    }
}

class OrderCommand {
    Execute(menuItemArray, menuItem){
        console.log('This function should not be called, as it an abstract method.')
    }
}

class AddCommand extends OrderCommand {
    Execute(menuItemArray, menuItem){
        menuItemArray.push(menuItem);
    }
}

class RemoveCommand extends OrderCommand {
    Execute(menuItemArray, menuItem){
        menuItemArray.splice(menuItemArray.map(function(e) { return e.name; }).indexOf(menuItem.name), 1);
    }
}

class ModifyCommand extends OrderCommand {
    Execute(menuItemArray, menuItem){
        var item = menuItemArray.find(function(menuItem){
            return x=>x.name == menuItem.name;
        });
    item.price = menuItem.price;
    item.amount = menuItem.amount;
    }
}

class CommandFactory {
    CreateAddCommand(){
        return new AddCommand();
    }

    CreateRemoveCommand(){
        return new RemoveCommand();
    }
    CreateModifyCommand(){
        return new ModifyCommand();
    }
}

class FastFoodOrder {
    constructor(){
        this.currentItems = new Array();
    }

    ExecuteCommand(command, menuItem){
        command.Execute(this.currentItems, menuItem);
    }

    ShowCurrentItems(){
        this.currentItems.forEach(function(item){
            item.Display();
        });
        console.log('--------------------------------------');
    }
    
}

class Patron{
    constructor(){
        this.order = new FastFoodOrder();
    }

    SetMenuItemAndExecuteMenuOrder(item)
    {
        this.menuItem = item;
        this.order.ExecuteCommand(this.orderCommand, this.menuItem);
    }

    AddOneMenuItemToOrder(menuItem){
        this.orderCommand = new CommandFactory().CreateAddCommand();
        this.SetMenuItemAndExecuteMenuOrder(menuItem);
    }

    RemoveOneMenuItemFromOrder(menuItem){
        this.orderCommand = new CommandFactory().CreateRemoveCommand();
        this.SetMenuItemAndExecuteMenuOrder(menuItem);
    }

    ModifyOneMenuItemInOrder(menuItem){
        this.orderCommand = new CommandFactory().CreateModifyCommand();
        this.SetMenuItemAndExecuteMenuOrder(menuItem);
    }

    ShowCurrentOrder(){
        this.order.ShowCurrentItems();
    }
}

//Run the command
var patron = new Patron();

patron.AddOneMenuItemToOrder(new MenuItem("French Fries", 2, 1.99));
patron.AddOneMenuItemToOrder(new MenuItem("Hamburger", 2, 2.59));
patron.AddOneMenuItemToOrder(new MenuItem("Drink", 2, 1.19));
patron.ShowCurrentOrder();

patron.RemoveOneMenuItemFromOrder(new MenuItem("French Fries", 2, 1.99));
patron.ShowCurrentOrder();

patron.ModifyOneMenuItemInOrder(new MenuItem("Hambuger", 4, 2.59));
patron.ShowCurrentOrder();

