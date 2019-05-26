! function(t) {
    var e = ["January", "February", "Mach", "April", "May", "June", "July", "August", "September", "October", "November", "September"],
        o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        s = {
            state: {
                items: []
            },
            newItem: function(t, descrText, e, o) {
                this.state.items.unshift({
                    text: t,
                    text1: descrText,
                    status: e,
                    label: o,
                    isEditing: !0
                })
            },
            load: function() {
                var t = window.localStorage.getItem("todo-list");
                return t && (this.state.items = JSON.parse(t)), !0
            },
            push: function() {
                window.localStorage.setItem("todo-list", JSON.stringify(this.state.items))
            }
        },
        n = Vue.extend({
            template: "#todo-header",
            data: function() {
                return {
                    date: "",
                    weekDay: "",
                    month: "",
                    year: ""
                }
            },
            ready: function() {
                var t = new Date;
                this.date = t.getDate(), this.weekDay = o[t.getDay()], this.month = e[t.getMonth()], this.year = t.getFullYear()
            },
            methods: {
                add: function(t) {
                    s.newItem("Type a new task and hit enter", "description", "undone", "normal")
                }
            }
        }),
        i = Vue.extend({
            template: "#todo-report",
            data: function() {
                return {
                    listState: s.state
                }
            },
            computed: {
                taskDone: function() {
                    var t = 0;
                    if (this.listState.items.length > 0)
                        for (var e = 0; e < this.listState.items.length; e++) "done" == this.listState.items[e].status && t++;
                    return t
                },
                taskTotal: function() {
                    return this.listState.items.length
                }
            }
        }),

        ii = Vue.extend({
            template: "#todo-report1",
            data: function() {
                return {
                    listState: s.state
                }
            },
            computed: {
                taskDone: function() {
                    var t = 0;
                    if (this.listState.items.length > 0)
                        for (var e = 0; e < this.listState.items.length; e++) "done" == this.listState.items[e].status && t++;
                    return t
                },
                taskTotal: function() {
                    return this.listState.items.length
                }
            }
        }),

        iii = Vue.extend({
            template: "#todo-report2",
            data: function() {
                return {
                    listState: s.state
                }
            }}),

        a = Vue.extend({
            template: "#todo-item",
            props: ["model"],
            data: function() {
                return {
                    tempText: "",
                    descrText: ""
                }
            },
            computed: {
                isDone: function() {
                    return "done" == this.model.status
                },
                isUrgent: function() {
                    return "urgent" == this.model.label
                },
            },
            methods: {
                save: function() {
                    "" != this.tempText && this.descrText && (this.model.text = this.tempText, this.model.text1 = this.descrText, this.model.isEditing = !1, s.push())
                },
                markDone: function() {
                    this.model.status = "done", s.push()
                },
                edit: function() {
                    this.model.isEditing = !0, this.$nextTick(function() {
                        t(this.$el).find("input").focus()
                    }), this.tempText = this.model.text, this.descrText = this.model.text1
                },
                delete: function() {
                    this.$dispatch("item-deleted", this.model), this.$nextTick(function() {
                        s.push()
                    })
                },
                showAction: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-list");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-list").removeClass("show"), s.addClass("show"))
                },
                showLabel: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-popup");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-popup").removeClass("show"), s.addClass("show"))
                },
                saveLabel: function(t) {
                    this.model.label = t, s.push()
                }
            }
        }),

        aa = Vue.extend({
            template: "#todo-item1",
            props: ["model"],
            data: function() {
                return {
                    tempText: "",
                    descrText: ""
                }
            },
            computed: {
                isDone: function() {
                    return "done" == this.model.status
                }
            },
            methods: {
                save: function() {
                    "" != this.tempText && this.descrText && (this.model.text = this.tempText, this.model.text1 = this.descrText, this.model.isEditing = !1, s.push())
                },
                markDone: function() {
                    this.model.status = "done", s.push()
                },
                edit: function() {
                    this.model.isEditing = !0, this.$nextTick(function() {
                        t(this.$el).find("input").focus()
                    }), this.tempText = this.model.text, this.descrText = this.model.text1
                },
                delete: function() {
                    this.$dispatch("item-deleted", this.model), this.$nextTick(function() {
                        s.push()
                    })
                },
                showAction: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-list");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-list").removeClass("show"), s.addClass("show"))
                },
                showLabel: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-popup");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-popup").removeClass("show"), s.addClass("show"))
                },
                saveLabel: function(t) {
                    this.model.label = t, s.push()
                }
            }
        }),

        aaa = Vue.extend({
            template: "#todo-item2",
            props: ["model"],
            data: function() {
                return {
                    tempText: "",
                    descrText: ""
                }
            },
            computed: {
                isDone: function() {
                    return "done" == this.model.status
                }
            },
            methods: {
                save: function() {
                    "" != this.tempText && this.descrText && (this.model.text = this.tempText, this.model.text1 = this.descrText, this.model.isEditing = !1, s.push())
                },
                markDone: function() {
                    this.model.status = "done", s.push()
                },
                edit: function() {
                    this.model.isEditing = !0, this.$nextTick(function() {
                        t(this.$el).find("input").focus()
                    }), this.tempText = this.model.text, this.descrText = this.model.text1
                },
                delete: function() {
                    this.$dispatch("item-deleted", this.model), this.$nextTick(function() {
                        s.push()
                    })
                },
                showAction: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-list");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-list").removeClass("show"), s.addClass("show"))
                },
                showLabel: function(e) {
                    e.stopPropagation();
                    var o = t(e.currentTarget),
                        s = o.find(".action-popup");
                    s.hasClass("show") ? s.removeClass("show") : (t(".action-popup").removeClass("show"), s.addClass("show"))
                },
                saveLabel: function(t) {
                    this.model.label = t, s.push()
                }
            }
        }),

        d = Vue.extend({
            template: "#todo-list",
            props: ["collection"],
            components: {
                "todo-item": a
            },
            events: {
                "item-deleted": function(t) {
                    this.collection.$remove(t)
                }
            }
        }),

        dd = Vue.extend({
            template: "#todo-list1",
            props: ["collection"],
            components: {
                "todo-item1": aa,
                
            },
            events: {
                "item-deleted": function(t) {
                    this.collection.$remove(t)
                }
            }
        }),

        ddd = Vue.extend({
            template: "#todo-list2",
            props: ["collection"],
            components: {
                "todo-item2": aaa
            },
            events: {
                "item-deleted": function(t) {
                    this.collection.$remove(t)
                }
            }
        });
    new Vue({
        el: "#app",
        data: function() {
            return {
                listState: s.state
            }
        },
        ready: function() {
            s.load()
        },
        created: function() {
            window.addEventListener("click", this.hideAction)
        },
        methods: {
            hideAction: function() {
                t(".action-popup").removeClass("show")
            }
        },
        components: {
            "todo-header": n,
            "todo-report": i,
            "todo-list": d,
            "todo-list1": dd,
            "todo-list2": ddd,
            "todo-report1": ii,
            "todo-report2": iii
        }
    })
}(jQuery);