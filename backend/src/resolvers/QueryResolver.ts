import { Query, Resolver } from 'type-graphql'

@Resolver()
export class QueryResolver {
  @Query((returns) => String)
  async asdf() {
    return 'test'
  }
}