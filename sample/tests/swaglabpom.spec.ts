import{expect,test} from '@playwright/test';
import { loginpage  } from '../automatinpom/loginn';

test('login to swaglab',async({page})=>{
    const Login=new loginpage(page);
    await Login.goto();
    await Login.login('standard_user','secret_sauce');
     await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
});