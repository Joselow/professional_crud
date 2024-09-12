import { useUserActions } from "@/hook/useUserActions";
import { User } from "@/interfaces/User";
import { Card, Title, TextInput, Button } from "@tremor/react";

export function CreateUser() {
  const { addNewUser } = useUserActions()


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { name, email, github } = Object.fromEntries(formData)
    addNewUser({ name , email, github } as Omit<User, 'id'>)
  }
  
  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create New User</Title>

      <form className="" onSubmit={handleSubmit}>
        <TextInput
        name="name"
          placeholder="Aquí el nombre"
        />
        <TextInput
        name="email"
          placeholder="Aquí el email"
        />
        <TextInput
        name="github"
          placeholder="Aquí el usuario de GitHub"
        />

        <div>
          <Button
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Crear usuario
          </Button>
        </div>
      </form>
    </Card>
  );
}
