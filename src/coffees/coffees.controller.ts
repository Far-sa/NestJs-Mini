import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAll (@Query() paginationQuery) {
    const { limit, offset } = paginationQuery
    return `This route returns Limit : ${limit} & offset : ${offset}`
  }
  @Get('flavors')
  getAllFlavors () {
    return 'This route returns all #flavors of coffee'
  }
  @Get(':id')
  getById (@Param('id') id: string, @Res() response) {
    response.status(200).send('This route returns one kinds of coffee')
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create (@Body() body) {
    return body
  }
  @Patch(':id')
  update (@Param('id') id: string, @Body() body) {
    return `This route update  #${id} of coffee`
  }
  @Delete(':id')
  remove (@Param('id') id: string) {
    return `This route remove  #${id} of coffee`
  }
}
