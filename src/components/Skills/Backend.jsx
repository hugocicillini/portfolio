import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
        <div className='skills__group'>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend