import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManualView from '../views/ManualView.vue'
import ManualChapterView from '../views/ManualChapterView.vue'
import ManualPageView from '../views/ManualPageView.vue'
import NamesView from '../views/NamesView.vue'
import GlossaryView from '../views/GlossaryView.vue'
import VideosView from '../views/VideosView.vue'
import WeeklyHubView from '../views/WeeklyHubView.vue'
import WeeklyContentView from '../views/WeeklyContentView.vue'
import WeeklyArchiveView from '../views/WeeklyArchiveView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import EventsView from '../views/EventsView.vue'
import TeacherView from '../views/TeacherView.vue'
import ContactView from '../views/ContactView.vue'
import LinksView from '../views/LinksView.vue'
import PrintView from '../views/PrintView.vue'
import ClockSettingsView from '../views/ClockSettingsView.vue'
import ClockDisplayView from '../views/ClockDisplayView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition

    if (
      to.name === 'manual-chapter' &&
      Boolean(to.params.sectionId)
    ) {
      return false
    }

    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/manual', name: 'manual', component: ManualView },
    {
      path: '/manual/read/:chapterId/:sectionId?',
      name: 'manual-chapter',
      component: ManualChapterView
    },
    {
      path: '/manual/page/:page',
      name: 'manual-page',
      component: ManualPageView
    },
    { path: '/names', name: 'names', component: NamesView },
    {
      path: '/clock-settings',
      name: 'clock-settings',
      component: ClockSettingsView
    },
    {
      path: '/clock-display',
      name: 'clock-display',
      component: ClockDisplayView,
      meta: { standalone: true }
    },
    { path: '/glossary', name: 'glossary', component: GlossaryView },
    { path: '/videos', name: 'videos', component: VideosView },
    { path: '/weekly', name: 'weekly', component: WeeklyHubView },
    {
      path: '/weekly/archive',
      name: 'weekly-archive',
      component: WeeklyArchiveView
    },
    {
      path: '/weekly/:kind(reading|contemplation|assignment)',
      name: 'weekly-current-content',
      component: WeeklyContentView
    },
    {
path: '/weekly/:week(\\d{4}-W\\d{2}|\\d{4}-\\d{2}-\\d{2})/:kind(reading|contemplation|assignment)',
      name: 'weekly-archived-content',
      component: WeeklyContentView
    },
    { path: '/activities', name: 'activities', component: ActivitiesView },
    {
      path: '/activities/events',
      name: 'events',
      component: EventsView
    },
    { path: '/teacher', name: 'teacher', component: TeacherView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/links', name: 'links', component: LinksView },
    {
      path: '/print',
      name: 'print',
      component: PrintView,
      meta: { print: true }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})
