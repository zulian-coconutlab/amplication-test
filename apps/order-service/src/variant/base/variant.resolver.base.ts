/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Variant } from "./Variant";
import { VariantCountArgs } from "./VariantCountArgs";
import { VariantFindManyArgs } from "./VariantFindManyArgs";
import { VariantFindUniqueArgs } from "./VariantFindUniqueArgs";
import { CreateVariantArgs } from "./CreateVariantArgs";
import { UpdateVariantArgs } from "./UpdateVariantArgs";
import { DeleteVariantArgs } from "./DeleteVariantArgs";
import { Product } from "../../product/base/Product";
import { VariantService } from "../variant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Variant)
export class VariantResolverBase {
  constructor(
    protected readonly service: VariantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "read",
    possession: "any",
  })
  async _variantsMeta(
    @graphql.Args() args: VariantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Variant])
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "read",
    possession: "any",
  })
  async variants(
    @graphql.Args() args: VariantFindManyArgs
  ): Promise<Variant[]> {
    return this.service.variants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Variant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "read",
    possession: "own",
  })
  async variant(
    @graphql.Args() args: VariantFindUniqueArgs
  ): Promise<Variant | null> {
    const result = await this.service.variant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Variant)
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "create",
    possession: "any",
  })
  async createVariant(
    @graphql.Args() args: CreateVariantArgs
  ): Promise<Variant> {
    return await this.service.createVariant({
      ...args,
      data: {
        ...args.data,

        productId: {
          connect: args.data.productId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Variant)
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "update",
    possession: "any",
  })
  async updateVariant(
    @graphql.Args() args: UpdateVariantArgs
  ): Promise<Variant | null> {
    try {
      return await this.service.updateVariant({
        ...args,
        data: {
          ...args.data,

          productId: {
            connect: args.data.productId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Variant)
  @nestAccessControl.UseRoles({
    resource: "Variant",
    action: "delete",
    possession: "any",
  })
  async deleteVariant(
    @graphql.Args() args: DeleteVariantArgs
  ): Promise<Variant | null> {
    try {
      return await this.service.deleteVariant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "productId",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProductId(
    @graphql.Parent() parent: Variant
  ): Promise<Product | null> {
    const result = await this.service.getProductId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
