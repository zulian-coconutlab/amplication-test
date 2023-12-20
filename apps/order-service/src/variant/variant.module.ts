import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VariantModuleBase } from "./base/variant.module.base";
import { VariantService } from "./variant.service";
import { VariantController } from "./variant.controller";
import { VariantResolver } from "./variant.resolver";

@Module({
  imports: [VariantModuleBase, forwardRef(() => AuthModule)],
  controllers: [VariantController],
  providers: [VariantService, VariantResolver],
  exports: [VariantService],
})
export class VariantModule {}
