export class Product
{
    username;
    password;
    statusMessage;
    _productName;
    get ProductName(){
        return this._productName;
    }
    set ProductName(newName){
        if(this.username=="Ranjit" && this.password=="admin"){
            this._productName=newName;
        }else{
            this.statusMessage="You Are Not Authorized To Set Product Name";
        }
    }
}