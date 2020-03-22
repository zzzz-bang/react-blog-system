import {
    UserOutlined,
    BarsOutlined,
    BorderRightOutlined,
    HighlightOutlined,
    MinusSquareOutlined,
    FormOutlined,
    CopyOutlined
} from '@ant-design/icons';
const Menus =[
    {
        title:'主页',
        path:'/home',
        icon:BarsOutlined,
        permission:1,
    },
    {
        title:'用户管理',
        path:'/user-manage',
        icon:UserOutlined,
        permission:3,
        children:[
            {
                title:'用户列表',
                path:'/user-manage/users',
                icon:UserOutlined,
                permission:3,
            }
        ]
    },
    {
        title:'角色管理',
        path:'/right-manages',
        icon:BorderRightOutlined,
        permission:3,
        children:[
            {
                title:'角色列表',
                path:'/right-manages/roles',
                icon:HighlightOutlined,
                permission:3,
            },
            {
                title:'权限列表',
                path:'/right-manages/rights',
                icon:MinusSquareOutlined,
                permission:3,
            }
        ]
    },
    {
        title: "文章管理",
        path: "/article-manage",
        icon: FormOutlined,
        permission:1,
        children: [
            {
                title: "文章列表",
                path: "/article-manage/list",
                icon: CopyOutlined,
                permission:1,
            },
            {
                title: "文章分类",
                path: "/article-manage/category",
                icon: CopyOutlined,
                permission:2,
            }
        ]
    },
]
export default Menus