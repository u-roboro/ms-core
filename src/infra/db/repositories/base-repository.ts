import * as Sequelize from "sequelize";
import { RequiredError, ResourceNotFound } from "urobo/build/main/errors";
import { CommonNotFoundError } from "../../../../errors/common-not-found-error";
import { BaseModel } from "../../../domain/model";
import { db } from "../config";

export class BaseRepository<T extends BaseModel> {
	database = db;
	modelSelected: Sequelize.ModelCtor<Sequelize.Model<any, any>>;

	constructor() {}

	// Create
	public async create(entity: T): Promise<T> {
		const result = await this.modelSelected.create(entity as any);
		return result.toJSON();
	}

	// Update
	public async updateById(id: string, entity: T): Promise<T> {
		const updated = await this.updateByWhere({ id }, entity);
		return updated;
	}

	public async updateBySlug(slug: string, entity: T): Promise<T> {
		const updated = await this.updateByWhere({ slug }, entity);
		return updated;
	}

	public async updateByWhere(where: any, entity: T): Promise<T> {
		const updated = await this.modelSelected.update(entity as any, {
			where,
		});

		if (updated[0] === 0) {
			throw new Error("Entity not found");
		}

		return entity;
	}

	// Delete
	public async deleteById(id: number): Promise<void> {
		await this.deleteByWhere({ id });
	}

	public async deleteBySlug(slug: string): Promise<void> {
		await this.deleteByWhere({ slug });
	}

	public async deleteByWhere(where: any): Promise<void> {
		const deleted = await this.modelSelected.destroy({
			where,
		});

		if (deleted === 0) {
		}
	}

	// Read
	public async findById(id: number): Promise<T> {
		const entity = await this.findByWhere({ id });

		if (entity.length === 0) {
			throw new ResourceNotFound("id: " + id);
		}

		return entity[0];
	}

	public async findBySlug(slug: string): Promise<T> {
		const entity = await this.findByWhere({ slug });

		if (entity.length === 0) {
			throw new ResourceNotFound("slug: " + slug);
		}

		return entity[0];
	}

	public async findByWhere(where: any): Promise<T[]> {
		const result = await this.modelSelected.findAll({ where });
		return result.map((entity) => entity.toJSON());
	}

	public async findAll(): Promise<T[]> {
		const result = await this.modelSelected.findAll();
		return result.map((entity) => entity.toJSON());
	}
}
