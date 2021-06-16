import { BasePojoAbstract } from "./abstract/base-pojo.abstract"

export class UsuarioModel extends BasePojoAbstract {
	nome: string
	email: string
	senha: string
}