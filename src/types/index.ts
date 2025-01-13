export type GenericParams = { [key: string]: unknown }

export type LayoutProps = {
  children: React.ReactNode
  params: Promise<GenericParams>
}

export type GenerateMetadataProps<
  Params = GenericParams,
  SearchParams = Record<string, unknown>,
> = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

export type PageComponentProps<
  Params extends GenericParams = GenericParams,
  SearchParams extends Record<string, unknown> = Record<string, unknown>,
> = {
  params: Promise<GenericParams & Params>
  searchParams: Promise<SearchParams>
}
