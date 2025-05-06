import React from 'react';
import { LuBadgeCheck } from 'react-icons/lu';

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">NodeJS</h3>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">ExpressJS</h3>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">NestJS</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="icon--badge" />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
