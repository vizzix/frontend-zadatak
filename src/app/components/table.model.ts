export type Tablica = Root2[]

export interface Root2 { 
  objectID: string
  name: string
  docTypeName: string
  folder: boolean
  attributes: Attribute[]
}

export interface Attribute {
  name: string
  value: string
}
