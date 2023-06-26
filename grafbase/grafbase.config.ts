import { g, auth, config } from '@grafbase/sdk'



const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length( { min: 5, max: 1000 } ).optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  tile: g.string().length( { min: 5, max: 100 } ),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})



export default config({
  schema: g
})
