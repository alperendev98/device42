// Agency nav links
export default {
   category1: [
      {
         "menu_title": "sidebar.dashboard",
         "menu_icon": "zmdi zmdi-view-dashboard",
         "child_routes": [
            {
               "path": "/app/dashboard/ecommerce",
               "menu_title": "sidebar.ecommerce",
               exact: true
            },
            {
               "path": "/horizontal/dashboard/saas",
               "menu_title": "sidebar.saas",
               exact: true
            },
            {
               "path": "/agency/dashboard/agency",
               "menu_title": "sidebar.agency",
               exact: true
            },
            {
               "path": "/boxed/dashboard/news",
               "menu_title": "sidebar.news",
               exact: true
            }
         ]
      },
      {
         "menu_title": "sidebar.ecommerce",
         "menu_icon": "zmdi zmdi-shopping-cart",
         "child_routes": [
            {
               "path": "/ecommerce/shop",
               "menu_title": "sidebar.shop"
            },
            {
               "path": "/ecommerce/cart",
               "menu_title": "sidebar.cart"
            },
            {
               "path": "/ecommerce/checkout",
               "menu_title": "sidebar.checkout"
            },
            {
               "path": "/ecommerce/shop-list",
               "menu_title": "sidebar.shopList"
            },
            {
               "path": "/ecommerce/shop-grid",
               "menu_title": "sidebar.shopGrid"
            },
            {
               "path": "/ecommerce/invoice",
               "menu_title": "sidebar.invoice"
            }
         ]
      },
      {
         "menu_title": "sidebar.widgets",
         "menu_icon": "zmdi zmdi-widgets",
         "child_routes": [
            {
               "path": "/widgets/charts",
               "menu_title": "sidebar.charts"
            },
            {
               "path": "/widgets/promo",
               "menu_title": "sidebar.promo"
            },
            {
               "path": "/widgets/general",
               "menu_title": "sidebar.general"
            },
            {
               "path": "/widgets/user",
               "menu_title": "sidebar.user"
            },
         ]
      },
      {
         "menu_title": "sidebar.pages",
         "menu_icon": "zmdi zmdi-file-plus",
         "child_routes": [
            {
               "path": "/pages/gallery",
               "menu_title": "sidebar.gallery"
            },
            {
               "path": "/pages/pricing",
               "menu_title": "sidebar.pricing"
            },
            {
               "path": "/pages/blank",
               "menu_title": "sidebar.blank"
            },
            {
               "path": "/terms-condition",
               "menu_title": "sidebar.terms&Conditions"
            },
            {
               "path": "/pages/feedback",
               "menu_title": "sidebar.feedback"
            },
            {
               "path": "/pages/report",
               "menu_title": "sidebar.report"
            },
            {
               "path": "/pages/faq",
               "menu_title": "sidebar.faq(s)"
            }
         ]
      },
      {
         "menu_title": "sidebar.session",
         "menu_icon": "zmdi zmdi-time",
         "child_routes": [
            {
               "path": "/session/login",
               "menu_title": "sidebar.login",
               exact: true
            },
            {
               "path": "/session/register",
               "menu_title": "sidebar.register",
               exact: true
            },
            {
               "path": "/session/lock-screen",
               "menu_title": "sidebar.lockScreen",
               exact: true
            },
            {
               "path": "/session/forgot-password",
               "menu_title": "sidebar.forgotPassword",
               exact: true
            },
            {
               "path": "/session/404",
               "menu_title": "sidebar.404",
               exact: true
            },
            {
               "path": "/session/500",
               "menu_title": "sidebar.500",
               exact: true
            }
         ]
      }
   ],
   category2: [
      {
         "menu_title": "sidebar.inbox",
         "menu_icon": "zmdi zmdi-email",
         "path": "/mail",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.chat",
         "menu_icon": "zmdi zmdi-comments",
         "path": "/chat",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.toDo",
         "menu_icon": "zmdi zmdi-comment-text-alt",
         "path": "/todo",
         "child_routes": null
      }
   ],
   category3: [
      {
         "menu_title": "sidebar.uiComponents",
         "menu_icon": "zmdi zmdi-wrench",
         "child_routes": [
            {
               "path": "/ui-components/alerts",
               "menu_title": "sidebar.alerts"
            },
            {
               "path": "/ui-components/app-bar",
               "menu_title": "sidebar.appBar"
            },
            {
               "path": "/ui-components/avatars",
               "menu_title": "sidebar.avatars"
            },
            {
               "path": "/ui-components/buttons",
               "menu_title": "sidebar.buttons"
            },
            {
               "path": "/ui-components/bottom-navigations",
               "menu_title": "sidebar.bottomNavigations"
            },
            {
               "path": "/ui-components/badges",
               "menu_title": "sidebar.badges"
            },
            {
               "path": "/ui-components/cards",
               "menu_title": "sidebar.cards"
            },
            {
               "path": "/ui-components/cards-masonry",
               "menu_title": "sidebar.cardsMasonry"
            },
            {
               "path": "/ui-components/chip",
               "menu_title": "sidebar.chip"
            },
            {
               "path": "/ui-components/dialog",
               "menu_title": "sidebar.dialog"
            },
            {
               "path": "/ui-components/dividers",
               "menu_title": "sidebar.dividers"
            },
            {
               "path": "/ui-components/drawers",
               "menu_title": "sidebar.drawers"
            },
            {
               "path": "/ui-components/expansion-panel",
               "menu_title": "sidebar.expansionPanel"
            },
            {
               "path": "/ui-components/grid-list",
               "menu_title": "sidebar.gridList"
            },
            {
               "path": "/ui-components/list",
               "menu_title": "sidebar.list"
            },
            {
               "path": "/ui-components/menu",
               "menu_title": "sidebar.menu"
            },
            {
               "path": "/ui-components/popover",
               "menu_title": "sidebar.popoverAndToolTip"
            },
            {
               "path": "/ui-components/progress",
               "menu_title": "sidebar.progress"
            },
            {
               "path": "/ui-components/snackbar",
               "menu_title": "sidebar.snackbar"
            },
            {
               "path": "/ui-components/selection-controls",
               "menu_title": "sidebar.selectionControls"
            }
         ]
      },
      {
         "menu_title": "sidebar.advancedComponent",
         "menu_icon": "zmdi zmdi-view-carousel",
         "child_routes": [
            {
               "path": "/advanced-component/dateTime-picker",
               "menu_title": "sidebar.dateAndTimePicker"
            },
            {
               "path": "/advanced-component/tabs",
               "menu_title": "sidebar.tabs"
            },
            {
               "path": "/advanced-component/stepper",
               "menu_title": "sidebar.stepper"
            },
            {
               "path": "/advanced-component/notification",
               "menu_title": "sidebar.notification"
            },
            {
               "path": "/advanced-component/sweet-alert",
               "menu_title": "sidebar.sweetAlert"
            },
            {
               "path": "/advanced-component/auto-complete",
               "menu_title": "sidebar.autoComplete"
            }
         ]
      },
      {
         "menu_title": "sidebar.aboutUs",
         "menu_icon": "zmdi zmdi-info",
         "path": "/about-us",
         "child_routes": null
      }
   ],
   category4: [
      {
         "menu_title": "sidebar.forms",
         "menu_icon": "zmdi zmdi-file-text",
         "child_routes": [
            {
               "path": "/forms/form-elements",
               "menu_title": "sidebar.formElements"
            },
            {
               "path": "/forms/text-field",
               "menu_title": "sidebar.textField"
            },
            {
               "path": "/forms/select-list",
               "menu_title": "sidebar.selectList"
            }
         ]
      },
      {
         "menu_title": "sidebar.charts",
         "menu_icon": "zmdi zmdi-chart-donut",
         "child_routes": [
            {
               "path": "/charts/re-charts",
               "menu_title": "sidebar.reCharts"
            },
            {
               "path": "/charts/react-chartjs2",
               "menu_title": "sidebar.reactChartjs2"
            }
         ]
      },
      {
         "menu_title": "sidebar.icons",
         "menu_icon": "zmdi zmdi-flag",
         "child_routes": [
            {
               "path": "/icons/themify-icons",
               "menu_title": "sidebar.themifyIcons"
            },
            {
               "path": "/icons/simple-lineIcons",
               "menu_title": "sidebar.simpleLineIcons"
            },
            {
               "path": "/icons/material-icons",
               "menu_title": "sidebar.materialIcons"
            }
         ]
      },
      {
         "menu_title": "sidebar.tables",
         "menu_icon": "zmdi zmdi-grid",
         "child_routes": [
            {
               "path": "/tables/basic",
               "menu_title": "sidebar.basic"
            },
            {
               "path": "/tables/data-table",
               "menu_title": "sidebar.dataTable"
            },
            {
               "path": "/tables/responsive",
               "menu_title": "sidebar.responsive"
            }
         ]
      }
   ],
   category5: [
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "zmdi zmdi-map",
         "child_routes": [
            {
               "path": "/maps/google-maps",
               "menu_title": "sidebar.googleMaps"
            },
            {
               "path": "/maps/leaflet-maps",
               "menu_title": "sidebar.leafletMaps"
            }
         ]
      },
      {
         "menu_title": "sidebar.users",
         "menu_icon": "zmdi zmdi-accounts",
         "child_routes": [
            {
               "path": "/users/user-profile-1",
               "menu_title": "sidebar.userProfile1"
            },
            {
               "path": "/users/user-profile",
               "menu_title": "sidebar.userProfile2"
            },
            {
               "path": "/users/user-management",
               "menu_title": "sidebar.userManagement"
            },
            {
               "path": "/users/user-list",
               "menu_title": "sidebar.userList"
            }
         ]
      },
      {
         "menu_title": "sidebar.calendar",
         "menu_icon": "zmdi zmdi-calendar-note",
         "child_routes": [
            {
               "path": "/calendar/basic",
               "menu_title": "components.basic"
            },
            {
               "path": "/calendar/cultures",
               "menu_title": "sidebar.cultures"
            },
            {
               "path": "/calendar/dnd",
               "menu_title": "sidebar.dnd"
            },
            {
               "path": "/calendar/selectable",
               "menu_title": "sidebar.selectable"
            },
            {
               "path": "/calendar/custom-rendering",
               "menu_title": "sidebar.customRendering"
            }
         ]
      },
      {
         "menu_title": "sidebar.editor",
         "menu_icon": "zmdi zmdi-edit",
         "child_routes": [
            {
               "path": "/editor/wysiwyg-editor",
               "menu_title": "sidebar.wysiwygEditor"
            },
            {
               "path": "/editor/quill-editor",
               "menu_title": "sidebar.quillEditor"
            }
         ]
      },
      {
         "menu_title": "sidebar.dragAndDrop",
         "menu_icon": "zmdi zmdi-mouse",
         "child_routes": [
            {
               "path": "/drag-andDrop/react-dragula",
               "menu_title": "sidebar.reactDragula"
            },
            {
               "path": "/drag-andDrop/react-dnd",
               "menu_title": "sidebar.reactDnd"
            }
         ]
      },
      {
         "menu_title": "sidebar.multiLevel",
         "menu_icon": "zmdi zmdi-view-web",
         "child_routes": [
            {
               "menu_title": "sidebar.level1",
               "child_routes": [
                  {
                     "path": "/level2",
                     "menu_title": "sidebar.level2"
                  },
                  {
                     "path": "/level2",
                     "menu_title": "sidebar.level2"
                  },
                  {
                     "path": "/level2",
                     "menu_title": "sidebar.level2"
                  }
               ]
            },
            {
               "menu_title": "sidebar.level1",
               "child_routes": [
                  {
                     "path": "/level2",
                     "menu_title": "sidebar.level2"
                  }
               ]
            }
         ]
      }
   ],
   category6: [
      {
         "menu_title": "sidebar.imageCropper",
         "menu_icon": "zmdi zmdi-crop",
         "path": "/image-cropper",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.videoPlayer",
         "menu_icon": "zmdi zmdi-collection-video",
         "path": "/video-player",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.dropzone",
         "menu_icon": "zmdi zmdi-dropbox",
         "path": "/dropzone",
         "child_routes": null
      }
   ]
}
