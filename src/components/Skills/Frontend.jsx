import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";

function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className='icon--badge' />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend