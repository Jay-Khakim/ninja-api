import { Controller, Get, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    
    @Get()
    getNinjas(@Query('type') type: string){
        return [{type}]
    }


    @Get("id")
    getOneNinja(){
        return {}
    }
}


