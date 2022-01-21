import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get('user')
    getRootRoute() {
        return 'hi there';
    }
}