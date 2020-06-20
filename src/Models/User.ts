import Model from './Model';

export default class extends Model {
  name!: string;

  username!: string;

  email!: string;

  password!: string;

  nickname?: string;
}
