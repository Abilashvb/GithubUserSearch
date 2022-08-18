export interface IUser {
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    id?: number;
    login?: string;
    node_id?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    url?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string,
    name?: string;
    created_at?: any;
    twitter_username?: string;
    company?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    [key: string]: any;
}