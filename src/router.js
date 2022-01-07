import React, {
  Suspense
} from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { useSession } from './context/SessionContext'

import { Header } from './components/Header'
import Loader from './components/Loader'
import AuthSupport from './screens/AuthSupport'
import ProtectedRoute from './utils/ProtectedRoute'
import Newsfeed from './screens/Newsfeed'
import Auth from './screens/Auth'
import Profile from './screens/Profile'
import ProfileActivity from './screens/ProfileActivity'
import Post from './screens/Post'
import Settings from './screens/Settings'
import Notifications from './screens/Notifications'
import Projects from './screens/Projects'
import CreateProject from './screens/CreateProject'
import ProjectDetails from './screens/ProjectDetails'
import Games from './screens/Games'
import OneMedia from './screens/OneMedia'
import OneMediaSchedule from './screens/OneMediaSchedule'
import OneMediaExplore from './screens/OneMediaExplore'
import CreateArtistProfile from './screens/CreateArtistProfile'
import OneMediaArtistProfile from './screens/OneMediaArtistProfile'
import MediaPlayList from './screens/MediaPlayList'
import MediaDetails from './screens/MediaDetails'
import VideoPlayerDetails from './screens/VideoPlayerDetails'

export const Router = () => {
  const [{ auth, loading }] = useSession()
  return (
    <BrowserRouter>
      {auth && <Header />}
      <Suspense fallback={<Loader />}>
        {
          loading && (
            <Loader />
          )
        }
        {!loading && (
          <Switch>
            <Route exact path="/">
              {!auth ? (
                  <Auth />
                ) : (
                  <Redirect to="/home" />
                )
              }
            </Route>
            <Route exact path='/auth-support'>
              <AuthSupport />
            </Route>
            <ProtectedRoute
              exact
              path="/profile/:userId"
              component={Profile}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/profile/:userId/activity"
              component={ProfileActivity}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={Newsfeed}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/post/:postId"
              component={Post}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/settings"
              component={Settings}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/notification"
              component={Notifications}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path='/projects'
              component={Projects}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path='/projects/create'
              component={CreateProject}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/projects/:projectId"
              component={ProjectDetails}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/games"
              component={Games}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/oneMedia"
              component={OneMedia}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/oneMedia/schedule"
              component={OneMediaSchedule}
              isLoggedIn={auth}
            />
            <ProtectedRoute
              exact
              path="/oneMedia/explore"
              component={OneMediaExplore}
              isLoggedIn={auth}
           />
            <ProtectedRoute
              exact
              path="/oneMedia/artist-profile"
              component={OneMediaArtistProfile}
              isLoggedIn={auth}
           />
           <ProtectedRoute
              exact
              path="/oneMedia/artist-profile/create"
              component={CreateArtistProfile}
              isLoggedIn={auth}
           />
           <ProtectedRoute
              exact
              path="/oneMedia/playlist"
              component={MediaPlayList}
              isLoggedIn={auth}
           />
            <ProtectedRoute
              exact
              path="/oneMedia/playlist/:mediaId"
              component={MediaDetails}
              isLoggedIn={auth}
           />
            <ProtectedRoute
              exact
              path="/oneMedia/video/:videoId"
              component={VideoPlayerDetails}
              isLoggedIn={auth}
           />
          </Switch>
        )}
      </Suspense>
    </BrowserRouter>
  )
}