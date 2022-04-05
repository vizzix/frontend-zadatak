export interface Root {
    FOLDER: Folder
    DOCUMENT: Document
    INVOICE: Invoice
  }
  
  export interface Folder {
    docTypeName: string
    displayName: string
    folder: boolean
    childTypes: ChildType[]
    attributes: Attribute[]
    editableAttributes: EditableAttribute[]
    searchAttributes: SearchAttribute[]
    resultAttributes: ResultAttribute[]
  }
  
  export interface ChildType {
    docTypeName: string
    insertable: boolean
    searchable: boolean
    folder: boolean
  }
  
  export interface Attribute {
    name: string
    dataType: string
    dataFormat?: string
    mandatory: string
    displayName: string
    component: string
    ranges: any[]
  }
  
  export interface EditableAttribute {
    name: string
  }
  
  export interface SearchAttribute {
    name: string
  }
  
  export interface ResultAttribute {
    name: string
  }
  
  export interface Document {
    docTypeName: string
    displayName: string
    folder: boolean
    childTypes: any[]
    attributes: Attribute2[]
    editableAttributes: EditableAttribute2[]
    searchAttributes: SearchAttribute2[]
    resultAttributes: ResultAttribute2[]
  }
  
  export interface Attribute2 {
    name: string
    dataType: string
    dataFormat?: string
    mandatory: string
    displayName: string
    component: string
    ranges: Range[]
  }
  
  export interface Range {
    name: string
    isDefault: boolean
    displayName: string
  }
  
  export interface EditableAttribute2 {
    name: string
  }
  
  export interface SearchAttribute2 {
    name: string
  }
  
  export interface ResultAttribute2 {
    name: string
  }
  
  export interface Invoice {
    docTypeName: string
    displayName: string
    folder: boolean
    childTypes: any[]
    attributes: Attribute3[]
    editableAttributes: any[]
    searchAttributes: SearchAttribute3[]
    resultAttributes: ResultAttribute3[]
  }
  
  export interface Attribute3 {
    name: string
    dataType: string
    dataFormat?: string
    mandatory: string
    displayName: string
    component: string
    ranges: Range2[]
  }
  
  export interface Range2 {
    name: string
    isDefault: boolean
    displayName: string
  }
  
  export interface SearchAttribute3 {
    name: string
  }
  
  export interface ResultAttribute3 {
    name: string
  }
  