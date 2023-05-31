// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/home" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Votes" titleTo="votes" buttonLabel="New Vote" buttonTo="newVote">
        <Route path="/votes/new" page={VoteNewVotePage} name="newVote" />
        <Route path="/votes/{id}/edit" page={VoteEditVotePage} name="editVote" />
        <Route path="/votes/{id}" page={VoteVotePage} name="vote" />
        <Route path="/votes" page={VoteVotesPage} name="votes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Recipes" titleTo="recipes" buttonLabel="New Recipe" buttonTo="newRecipe">
        <Route path="/recipes/new" page={RecipeNewRecipePage} name="newRecipe" />
        <Route path="/recipes/{id}/edit" page={RecipeEditRecipePage} name="editRecipe" />
        <Route path="/recipes/{id}" page={RecipeRecipePage} name="recipe" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/recipes" page={RecipeRecipesPage} name="recipes" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
