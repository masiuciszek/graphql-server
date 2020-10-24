type PostType =
  | "LOVE"
  | "NEWS"
  | "DRAMA"
  | "TECH"
  | "HISTORY"
  | "SPORT"
  | "POLITICS"

interface Post {
  id: string
  title: string
  desc: string
  type: PostType
  author: User
  createdAt: string
}

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  address: string
  password: string
  createdAt: string
  posts: Post[]
}

interface GetUserQuery {}