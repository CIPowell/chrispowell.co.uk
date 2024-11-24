import Link from "./Link";

export default {
    component: Link
}

export const Default = {
    args: {
        url: "/",
        label: "Home"
    },
    render: ({url, label}) => <Link url={url} label={label} />
}

export const Current = {
    args: {
        url: "/",
        label: "Home"
    },
    render: ({url, label}) => <Link url={url} label={label} current={true} />
}