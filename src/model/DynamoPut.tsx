export interface DynamoRoot {
  Put: Put
}

export interface Put {
  Item: Item,
  TableName: string
}

export interface Item {
  [key: string]: object
}