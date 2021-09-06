import React, {
  createContext,
  useReducer,
  useEffect
} from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CustomThemeProvider } from './context/ThemeContext'
import customTheme from './theme.json'
import { SessionProvider } from './context/SessionContext'
import { WebStrategy } from './webStrategy'

/**
 * Custom Theme images
 */
import logoMain from './assets/images/logo-main.png'
import logoIcon from './assets/images/logo-icon.png'
import profileBanner from './assets/images/profile-banner.png'
import userPhoto from './assets/images/user-photo.png'
import oneMediaLogo from './assets/images/one-media-logo.png'
import oneMediaLogoText from './assets/images/oneMedia-logo-text.png'

import follow from './assets/icons/follow-icon.svg'
import search from './assets/icons/search.svg'
import edit from './assets/icons/edit.png'
import notification from './assets/icons/notification.png'
import chat from './assets/icons/chat.svg'
import message from './assets/icons/message-icon.png'
import messageRect from './assets/icons/message-rect.svg'
import rotate from './assets/icons/rotate.svg'
import upload from './assets/icons/upload.svg'
import drag from './assets/icons/drag.svg'
import workPlace from './assets/icons/work-place.png'
import facebookLogo from './assets/icons/facebook-logo.svg'
import instagramLogo from './assets/icons/instagram-logo.png'
import twitterLogo from './assets/icons/twitter-logo.png'
import youtubeLogo from './assets/icons/youtube-logo.svg'
import lock from './assets/icons/lock.svg'
import publicIcon from './assets/icons/public.svg'
import blueUserGroup from './assets/icons/blue-group.png'
import notificationMessage from './assets/icons/notification-message.png'
import greenLike from './assets/icons/green-like.png'
import camera from './assets/icons/camera.png'
import emotion from './assets/icons/emotion.png'
import rocket from './assets/icons/rocket.png'
import inviteFriends from './assets/icons/invite-friends.png'
import invite from './assets/icons/invite.png'
import multiMedia from './assets/images/multi-media.png'
import uploadImage from './assets/icons/upload-image.png'
import uploadVideo from './assets/icons/upload-video.png'
import gif from './assets/icons/gif.png'
import uploadFiles from './assets/icons/upload-files.png'
import createPoll from './assets/icons/create-poll.png'
import uploadAudio from './assets/icons/upload-audio.png'
import addProduct from './assets/icons/add-product.png'
import addBackground from './assets/icons/add-background.png'
import blueStudy from './assets/icons/blue-study.png'
import redWorkplace from './assets/icons/red-workplace.png'
import greenBirthday from './assets/icons/green-birthday.png'
import blueGender from './assets/icons/blue-gender.png'
import pinkPost from './assets/icons/pink-post.png'
import profile from './assets/icons/profile.png'
import oneMedia from './assets/icons/one-media.png'
import blog from './assets/icons/blog.png'
import jobs from './assets/icons/jobs.png'
import market from './assets/icons/market.png'
import games from './assets/icons/games.png'
import schedule from './assets/icons/schedule.png'
import projects from './assets/icons/projects.png'
import timeline from './assets/icons/timeline.png'
import security from './assets/icons/security.png'
import privacy from './assets/icons/privacy.png'
import notifications from './assets/icons/notifications.png'
import notificationPhoto from './assets/icons/notification-photo.png'
import notificationVideo from './assets/icons/notification-video.png'
import notificationSource from './assets/icons/notification-source.png'
import notificationPost from './assets/icons/notification-post.png'
import notificationTag from './assets/icons/notification-tag.png'
import notificationVehicle from './assets/icons/notification-vehicle.png'
import notificationProject from './assets/icons/notification-project.png'
import notificationDocument from './assets/icons/notification-document.png'
import notificationCheckPage from './assets/icons/notification-checkPage.png'
import notificationInvited from './assets/icons/notification-invited.png'
import notificationRated from './assets/icons/notification-rated.png'
import notificationStar from './assets/icons/notification-star.png'
import defaultUser from './assets/images/default-user.png'
import linkIcon from './assets/icons/link-icon.png'
import rating from './assets/icons/rating.png'
import document from './assets/icons/document.png'
import mediaPlay from './assets/icons/media-play.png'
import blueEdit from './assets/icons/blue-edit.png'
import analytics from './assets/icons/analytics.png'
import activity from './assets/icons/activity.png'
import copyLink from './assets/icons/copy-link.png'
import calendar from './assets/icons/calendar.png'
import gameBanner from './assets/images/game-banner.png'
import explore from './assets/icons/explore.png'
import audio from './assets/icons/audio.png'
import radio from './assets/icons/radio.png'
import library from './assets/icons/library.png'
import tip from './assets/icons/tip.png'
import monet from './assets/icons/monet.png'
import createIcon from './assets/icons/create-icon.png'
import playBg from './assets/icons/play-bg.png'
import emotionComment from './assets/icons/emotion-comment.png'
import cameraComment from './assets/icons/camera-comment.png'
import gifComment from './assets/icons/gif-comment.png'
import uploadArrow from './assets/icons/upload-arrow.png'
import like from './assets/icons/like.png'
import disLike from './assets/icons/dislike.png'
import add from './assets/icons/add.png'
import newPost from './assets/icons/new-post.png'
import advertise from './assets/icons/advertise.png'
import adBlog from './assets/icons/ad-blog.png'
import project from './assets/icons/project.png'
import pinkCamera from './assets/icons/pink-camera.png'
import sound from './assets/icons/sound.png'
import searchMain from './assets/icons/search-main.png'
import sharpTag from './assets/icons/sharp-tag.png'
import goldTag from './assets/icons/gold-tag.png'
import emojiTag from './assets/icons/emoji-tag.png'
import hart from './assets/icons/hart.png'

/**
 * dummies
 */
import noRule from './assets/dummies/no-rule.png'
import noReports from './assets/dummies/no-reports.png'

import {
  useMediaQuery,
  useTheme
} from '@mui/material'

import { createTheme } from '@mui/material/styles'

import { initialUIState, UIReducer } from './context/UIContext'
// import { UserReducer, initialUserState } from './context/UserContext'
import { PostReducer, initialPostState } from './context/PostContext'
import { ChatReducer, initialChatState } from './context/ChatContext'

import dotenv from 'dotenv'

import { Router } from './router'

dotenv.config();

export const UIContext = createContext()
// export const UserContext = createContext()
export const PostContext = createContext()
export const ChatContext = createContext()

/**
 * custom theme images
 */
const logos = {
  logoMain,
  logoIcon
}

customTheme.images = {
  logos,
  general: {
    profileBanner,
    userPhoto,
    multiMedia,
    defaultUser,
    gameBanner,
    oneMediaLogo,
    oneMediaLogoText
  },
  icons: {
    search,
    edit,
    notification,
    message,
    messageRect,
    invite,
    follow,
    chat,
    sound,
    searchMain,
    rotate,
    upload,
    drag,
    workPlace,
    facebookLogo,
    instagramLogo,
    youtubeLogo,
    lock,
    uploadArrow,
    publicIcon,
    blueUserGroup,
    greenLike,
    notificationMessage,
    camera,
    emotion,
    rocket,
    inviteFriends,
    uploadImage,
    uploadVideo,
    gif,
    uploadFiles,
    createPoll,
    uploadAudio,
    addProduct,
    addBackground,
    blueStudy,
    redWorkplace,
    greenBirthday,
    blueGender,
    pinkPost,
    profile,
    oneMedia,
    blog,
    jobs,
    market,
    games,
    schedule,
    projects,
    timeline,
    security,
    privacy,
    notifications,
    notificationPhoto,
    notificationVideo,
    notificationSource,
    notificationPost,
    notificationTag,
    notificationVehicle,
    notificationProject,
    notificationDocument,
    notificationCheckPage,
    notificationInvited,
    notificationRated,
    notificationStar,
    linkIcon,
    rating,
    document,
    mediaPlay,
    blueEdit,
    analytics,
    activity,
    copyLink,
    calendar,
    explore,
    audio,
    radio,
    library,
    tip,
    twitterLogo,
    monet,
    createIcon,
    playBg,
    emotionComment,
    cameraComment,
    gifComment,
    like,
    disLike,
    add,
    pinkCamera,
    sharpTag,
    goldTag,
    emojiTag,
    newPost,
    advertise,
    adBlog,
    project,
    hart
  },
  dummies: {
    noRule,
    noReports
  }
} 

function App() {
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
  // const [userState, userDispatch] = useReducer(UserReducer, initialUserState)
  const [postState, postDispatch] = useReducer(PostReducer, initialPostState)
  const [chatState, chatDispatch] = useReducer(ChatReducer, initialChatState)
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'))
  const Theme = React.useMemo(
    () =>
      createTheme({
        active: {
          success: 'rgb(63,162,76)',
        },

        palette: {
          type: uiState.darkMode ? 'dark' : 'light',
          primary: {
            main: 'rgb(1,133,243)',
          },

          secondary: {
            main: 'rgb(63,162,76)',
          },

          default: {
            main: '#cacaca',
          },
        },
      }),
    [uiState.darkMode],
  )

  useEffect(() => {
    uiDispatch({ type: 'SET_USER_SCREEN', payload: mdScreen })
  }, [mdScreen])

  const webStrategy = new WebStrategy()

  return (
    <SessionProvider strategy={webStrategy}>
      <UIContext.Provider value={{ uiState, uiDispatch }}>
        {/* <UserContext.Provider value={{ userState, userDispatch }}> */}
        <PostContext.Provider value={{ postState, postDispatch }}>
          <ChatContext.Provider value={{ chatState, chatDispatch }}>
            <ThemeProvider theme={Theme}>
              <CustomThemeProvider customTheme={customTheme}>
                <Router />
              </CustomThemeProvider>
            </ThemeProvider>
          </ChatContext.Provider>
        </PostContext.Provider>
        {/* </UserContext.Provider> */}
      </UIContext.Provider>
    </SessionProvider>
  )
}

export default App
