const SignUpPage = () => {
    return (
      <div className="page-container">
        <section className="heading">
          <h1 className="page-title">Sign Up</h1>
          <p>Sign Up to so you can start working on your goals</p>
        </section>

        <h1>Sign Up Form</h1>

      </div>
    )
}

export default SignUpPage

// <app-spinner *ngIf="isLoading"></app-spinner>
// <div class="page-container">
//     <section class="heading">
//         <h1 class="page-title">
//             <i class="fa-solid fa-right-to-bracket"></i>
//             Sign Up
//         </h1>
//         <p>Inform your credentials to access the dashboard</p>
//     </section>
//     <section class="form">
//         <form (submit)="handleSubmit()">
//             <div class="form-group">
//                 <label class="label-block">Name</label>
//                 <input
//                     type="text"
//                     [(ngModel)]="name"
//                     name="name"
//                     class="form-text"
//                     placeholder="Your full name"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <label class="label-block">E-mail</label>
//                 <input
//                     type="email"
//                     [(ngModel)]="email"
//                     name="email"
//                     class="form-text"
//                     placeholder="Enter an E-mail address"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <label class="label-block">Phone</label>
//                 <input
//                     type="text"
//                     [(ngModel)]="phone"
//                     name="phoen"
//                     class="form-text"
//                     placeholder="Phone number like: 999-999-9999"
//                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <label class="label-block">Password</label>
//                 <input
//                     type="password"
//                     [(ngModel)]="password"
//                     name="password"
//                     class="form-text"
//                     placeholder="Enter a password for this e-mail"
//                     min="3"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <label class="label-block">Confirm Password</label>
//                 <input
//                     type="password"
//                     [(ngModel)]="confirmPassword"
//                     name="confirmPassword"
//                     class="form-text"
//                     placeholder="Retype your password to be sure"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <button type="submit" class="btn" [disabled]="isSubmitted && 'disabled'">
//                     Submit
//                 </button>
//             </div>
//         </form>
//     </section>
// </div>
//
