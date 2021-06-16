import { BasePojoAbstract } from "./abstract/base-pojo.abstract"

export class ConfiguracaoBaseModel extends BasePojoAbstract {
	taxaPlataforma: number
	precoTicket: number
	valorMinimoDeposito: number
}