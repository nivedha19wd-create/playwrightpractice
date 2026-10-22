import{type Locator,type Page} from "@playwright/test";
export class loginpage{
    readonly page:Page;
    readonly userinput: Locator;
    readonly userpassword: Locator;
    readonly loginbutton: Locator;

    constructor(page:Page){
        this.page=page;
        this.userinput=page.getByPlaceholder('Username');
        this.userpassword=page.getByPlaceholder('Password');
        this.loginbutton=page.getByRole('button',{name:'Login'});
    }
async goto():Promise<void>{
    await this.page.goto('https://www.saucedemo.com/');}

async login(username:string,password:string):Promise<void>{
await  this.userinput.fill(username);
await this.userpassword.fill(password);
await this.loginbutton.click();

}}