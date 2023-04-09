const DashboardPage = () => {
  const user = ""
  return (
    <div className="page-container">
      <section className="heading">
        <h1 className="page-title">
          <i class="fa-solid fa-calendar-days"></i>
          Dashboard
        </h1>
        <p>Goals Dashboard</p>
      </section>

      <h1>Add Goal Form</h1>

      <h1>Goals List</h1>
    </div>
  )
}

export default DashboardPage

// <app-spinner *ngIf="isLoading"></app-spinner>
// <div class="page-container">
//     <section class="heading">
//         <h1 class="page-title">Welcome {{ user && user.name ? user.name : "" }}</h1>
//         <p>Goals Dashboard</p>
//     </section>
//     <app-add-goal-form (addGoal)="handleAddGoal($event)"></app-add-goal-form>
//     <app-goal-list
//         *ngIf="!isLoading"
//         [goals]="goals"
//         (removeGoal)="handleRemoveGoal($event)"
//     ></app-goal-list>
// </div>
