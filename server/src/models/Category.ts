import { Schema, model, Document, Types } from 'mongoose';

// Forma del documento Role en la base de datos
export interface IRole extends Document {
  _id: Types.ObjectId;
  nombre: string;
  precioUnitario: number;
  category: Types.ObjectId[];
}

/**
 * Rol que agrupa permisos.
 * Ejemplo: { nombre: 'admin', permisos: [ObjectId, ObjectId] }
 */
const rolSchema = new Schema<IRole>(
  {
    nombre: { 
      type: String,
      required: [true, 'El nombre del rol es obligatorio'],
      unique: true,
      trim: true,
      minlength: [3, 'El nombre del rol debe tener al menos 3 caracteres']
    },
    precioUnitario: { 
      type: Number,
      required: [true, 'El precio unitario es obligatorio'],
      min: [0, 'El precio unitario no puede ser negativo']
     },
    // Lista de permisos — un rol debe tener al menos 1
    
  },
  { timestamps: true }
);

export default model<IRole>('Role', rolSchema);
