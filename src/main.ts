import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import momentTimezone from "moment-timezone";
import { AllExceptionsFilter } from "./filters/http-exception.filter";

async function bootstrap(){
 const app = await NestFactory.create(AppModule);
 app.useGlobalFilters(new AllExceptionsFilter());
 Date.prototype.toJSON = function(): any {
 return momentTimezone(this).tz('America/São_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS')
 }
 await app.listen(3000);
}
bootstrap();
