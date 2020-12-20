class Shortcut {
    constructor(url){
        // extract group, subgroup from url. if not exist, use default configuration
        // group, subgroup, keyword, redirectUrl, lastUsedDate
    }
}

//all data exist in Shortcuts, Group is just a way to manage Shortcuts
class Group {
    constructor(name, children, isDefault){
        //name, children, isDefault, shortcutName (first char if not already exist)
        //if name is null, set to "default"
        //children can only be subgroups
        //expired date is taken from config default if not set
    }

    isExpired()
    extendExpire(date)
    deleteChild(childUrl) //delete child in shortCuts
    deleteGrandChildren(childrenPrefix) //delete the child, and all its grand children if exist
    deleteAllChildren() //calls deleteGrandChildren on all children
}
