export const PARQTemplate = `
  <div *ngIf="showFormError"
    class="invalid">
    Please Fill in all required values
  </div>
  <form
    #surveyForm
    [formGroup]="surveyFormGroup"
    (ngSubmit)="onFormSubmit(surveyForm)">
    <div class="question">
      <span class="question__text">
        <p>Has your doctor ever said that you have a heart condition OR high blood pressure ?</p>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q1"
          (change)="onChange($event)">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Do you feel pain in your chest at rest, during your daily activities of living,
        OR when you do physical activity?</p>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q2">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Do you lose balance because of dizziness OR have you lost consciousness in the
        last 12 months?</p>
        <small>Please answer NO if your dizziness was associated with  over-breathing (including during vigorous exercise).</small>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q3">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Have you ever been diagnosed with another chronic medical condition (other than
          heart disease or high blood pressure)?</p>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q4">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Are you currently taking prescribed medications for a chronic medical condition?</p>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q5">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Do you currently have (or have had within the past 12 months) a bone, joint, or soft
          tissue (muscle, ligament, or tendon) problem that could be made worse by becoming
          more physically active?</p>
        <small>Please answer NO if you had a problem in the past, but it
        does not limit your current ability to be physically active.</small>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q6">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>
    <div class="question">
      <span class="question__text">
        <p>Has your doctor ever said that you should only do medically supervised
          physical activity?</p>
      </span>
      <span class="input-field input-field-non-wrappable">
        <mat-radio-group
          class="radio-group"
          formControlName = "q7">
          <mat-radio-button value="yes">Yes</mat-radio-button>
          <mat-radio-button value="no">No</mat-radio-button>
        </mat-radio-group>
      </span>
    </div>

    <ng-container *ngIf="showPart2">
      <div class="question">
        <span class="question__text">
          <p> Do you have Arthritis, Osteoporosis, or Back Problems?</p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q8">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you currently have Cancer of any kind?</p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q9">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have a Heart or Cardiovascular Condition? <small>This includes Coronary Artery Disease, Heart Failure,
              Diagnosed Abnormality of Heart Rhythm</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q10">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have High Blood Pressure?</p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q11">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have a resting blood pressure equal to or greater than 160/90 mmHg with or without medication?
              <small>Answer YES if you do not know your resting blood pressure</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q12">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have any Metabolic Conditions?
            <small>This includes Type 1 Diabetes, Type 2 Diabetes, Pre-Diabetes</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q13">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have any Mental Health Problems or Learning Difficulties?
            <small>This includes Alzheimer’s, Dementia, Depression, Anxiety Disorder, Eating Disorder,
              Psychotic Disorder, Intellectual Disability, Down Syndrome</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q14">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have a Respiratory Disease?
            <small>This includes Chronic Obstructive Pulmonary Disease, Asthma, Pulmonary High
              Blood Pressure</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q15">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have a Spinal Cord Injury?
            <small>This includes Tetraplegia and Paraplegia</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q16">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Have you had a Stroke?<small>This includes Transient Ischemic Attack (TIA) or
            Cerebrovascular Event</small></p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q17">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
      <div class="question">
        <span class="question__text">
          <p>Do you have any other medical condition not listed above or do you have two
            or more medical conditions?</p>
        </span>
        <span class="input-field input-field-non-wrappable">
          <mat-radio-group
            class="radio-group"
            formControlName = "q18">
            <mat-radio-button value="yes">Yes</mat-radio-button>
            <mat-radio-button value="no">No</mat-radio-button>
          </mat-radio-group>
        </span>
      </div>
    </ng-container>
    <button class="hidden-form-btn" style="display: none" type="submit"></button>
  </form>`;
