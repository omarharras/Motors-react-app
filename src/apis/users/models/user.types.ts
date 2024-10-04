export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: Address[];
  createdAt: Date;
  updatedAt?: Date;
};

export type Address = {
  street: string;
  city: string;
  state?: string;
  country: string;
};
