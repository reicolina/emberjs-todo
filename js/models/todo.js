Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Read manuals',
   isCompleted: false
 },
 {
   id: 2,
   title: 'Start coding!',
   isCompleted: true
 }
];