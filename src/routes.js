import first_page from "@/components/first_page";
import show_page from "@/components/show_page";
import list_blogs from "@/components/list_blogs";
import single_blog from "@/components/single-blog"

export default [
{path:'/',component:show_page},
{path:'/add',component:first_page},
    {path:'/list',component: list_blogs},
    {path:'/single_blog/:id',component: single_blog},

]